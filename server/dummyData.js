import Company from './models/company';

export default function() {
  Company.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const company1 = new Company({ name: 'Microsoft', earnings: 25000 });
    const company2 = new Company({ name: 'Apple', earnings: 15000 });

    Company.create([company1, company2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
