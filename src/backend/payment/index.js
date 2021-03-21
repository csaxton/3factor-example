const Sequelize = require("sequelize");

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING || "postgres://postgres:password@localhost:6432/postgres";

async function makePayment(paymentReq) {
    try {
        var sequelize = new Sequelize(
            POSTGRES_CONNECTION_STRING,
            {
                operatorsAliases: false
            }
        );
        var res = await sequelize.query('BEGIN;' +
                                    'INSERT INTO payments(order_id, amount, type) values (:orderId, :amount, :type); ' +
                                    'UPDATE orders SET payment_valid=true WHERE order_id = :orderId; ' +
                                    'COMMIT;',
                                        { replacements: { orderId: paymentReq.order_id, amount: paymentReq.metadata.amount, type: paymentReq.metadata.type } }
                                       );
        return res;
    } catch(e) {
        console.log(e);
        throw new Error(e);
    } finally {
	      sequelize.close();
    }
}

exports.makePayment = makePayment;
