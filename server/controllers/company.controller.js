import Company from '../models/company';
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

    // Company.findByIdAndUpdate(
    //   req.body.company.id,
    //   { $push: { children: saved._id } },
    //   { new: true, safe: true, upsert: true },
    //   (err1) => {
    //     if (err1) {
    //       return res.status(500).send(err);
    //     }
    //   });

    return res.json({ company: saved });
  });
}

export function deletePost(req, res) {
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
