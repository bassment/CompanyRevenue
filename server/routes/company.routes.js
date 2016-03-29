import { Router } from 'express';
import * as CompanyController from '../controllers/company.controller';
const router = new Router();

// Get all Companies
router.route('/getCompanies').get(CompanyController.getCompanies);

// Add a new Company
router.route('/addCompany').post(CompanyController.addCompany);

// Update a Company
router.route('/updateCompany').post(CompanyController.updateCompany);

// Delete a Company
router.route('/deleteCompany').post(CompanyController.deleteCompany);

// Add child Company
router.route('/addChildCompany').post(CompanyController.addChildCompany);

export default router;
