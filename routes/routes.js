import express from 'express';
import controller from '../controllers/transactionController.js';

const transactionRouter = express();

transactionRouter.get('/:yearMonth', controller.findYearMonth);
transactionRouter.post('', controller.createTransaction);
transactionRouter.delete('/:id', controller.deleteTransaction);
transactionRouter.put('/:id', controller.updateTransaction);


export { transactionRouter };
