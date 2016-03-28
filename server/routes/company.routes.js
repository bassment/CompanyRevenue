import { Router } from 'express';
import * as CompanyController from '../controllers/company.controller';
const router = new Router();

// Get all Companies
router.route('/getCompanies').get(CompanyController.getCompanies);

// Add a new Company
router.route('/addCompany').post(CompanyController.addCompany);

// Delete a Company
// router.route('/deleteCompany').post(CompanyController.deleteCompany);

export default router;
