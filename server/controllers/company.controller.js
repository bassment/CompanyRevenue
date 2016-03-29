import Company from '../models/company';
import Child from '../models/child';
import sanitizeHtml from 'sanitize-html';

export function getCompanies(req, res) {
  Company.find({})
    .populate('children')
    .sort('-dateAdded')
    .exec((err, companies) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({ companies });
    });
}

export function addCompany(req, res) {
  if (!req.body.company.name || !req.body.company.earnings) {
    return res.status(403).end();
  }

  const newCompany = new Company(req.body.company);

  newCompany.name = sanitizeHtml(newCompany.name);
  newCompany.earnings = sanitizeHtml(newCompany.earnings);

  newCompany.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.json({ company: saved });
  });
}

export function updateCompany(req, res) {
  const companyId = req.body.companyId;
  const name = sanitizeHtml(req.body.name);
  const earnings = sanitizeHtml(req.body.earnings);

  Company.findByIdAndUpdate(
    companyId,
    { name, earnings },
    { new: true, safe: true, upsert: true },
    (err, saved) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.json({ company: saved });
    });
}

export function deleteCompany(req, res) {
  const companyId = req.body.companyId;

  Company.findById(companyId).exec((err, company) => {
    if (err) {
      return res.status(500).send(err);
    }

    company.remove(() => {
      res.status(200).end();
    });
  });
}

export function deleteChildCompany(req, res) {
  const childId = req.body.childId;

  Child.findById(childId).exec((err, child) => {
    if (err) {
      return res.status(500).send(err);
    }

    child.remove(() => {
      res.status(200).end();
    });
  });
}

export function addChildCompany(req, res) {
  const companyId = req.body.companyId;
  const name = req.body.name;
  const earnings = req.body.earnings;

  if (!req.body.name || !req.body.earnings) {
    return res.status(403).end();
  }

  const newChild = new Child({ name, earnings });

  newChild.name = sanitizeHtml(newChild.name);
  newChild.earnings = sanitizeHtml(newChild.earnings);

  newChild.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }

    Company.findByIdAndUpdate(
      companyId,
      { $push: { children: saved._id } },
      { new: true, safe: true, upsert: true },
      (err1) => {
        if (err1) {
          return res.status(500).send(err);
        }
      });

    return res.json({ child: saved, parentId: companyId });
  });
}
