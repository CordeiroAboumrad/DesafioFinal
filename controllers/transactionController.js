import { db, transactionModel } from '../models/TransactionModel.js';


const findYearMonth = async (req, res) => {
    const yearMonth = req.params.yearMonth;
    try{
        const transaction = await transactionModel.find({"yearMonth": yearMonth});
        res.status(200).send(transaction);
    }catch(error){
        res.status(500).send('É necessário informar o parâmetro período, cujo formato deve ser yyyy-mm');
    }
};


const createTransaction = async (req, res) => {
    try{
        const transaction = new transactionModel(req.body);
        await transaction.save();

        res.status(200).send(transaction);
    }catch(error){
        res.status(500).send(`Erro: ${error}`);
    }
};


const deleteTransaction = async (req, res) => {
    const id = req.params.id;

    try{
        const transaction = await transactionModel.findOneAndDelete({"_id": id});
        if(!transaction){
            res.status(404).send('Documento não encontrado na coleção.');
        }

        res.status(200).send(`Transação excluída com sucesso!\nTransação:\n${transaction}`);
    }catch(error){
        res.status(500).send(`Erro: ${error}`);
    }
};


const updateTransaction = async (req, res) => {
    const id = req.params.id;

    try{
        if(!req.body){
            throw 'Dados para atualização vazios';
        }

        const transaction = await transactionModel.findOneAndUpdate({"_id": id},
            req.body,
            {new: true}
        );

        res.status(200).send(transaction);
    }catch(error){
        res.status(500).send(`Erro: ${error}`);
    }
};



export default { findYearMonth, createTransaction, deleteTransaction, updateTransaction };
