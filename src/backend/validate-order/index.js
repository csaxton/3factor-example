const Sequelize = require("sequelize");

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING || "postgres://postgres:password@localhost:6432/postgres";

function performValidation(order){
    return true;
}

async function validateOrder(order) {
    try {
        var sequelize = new Sequelize(
            POSTGRES_CONNECTION_STRING, {
                operatorsAliases: false
            }
        );
        var isValid = performValidation(order);

        console.info(`setting order '${order.order_id}' validity to '${isValid}'`)
        var res = await sequelize.query(
            'UPDATE orders SET order_valid = $isValid WHERE order_id = $orderId',
            {   
                type: Sequelize.QueryTypes.UPDATE,
                bind: { isValid: isValid, orderId: order.order_id } 
            }
        );
        return res;
    } catch(e) {
        console.error(e);
        throw new Error(e);
    } finally {
	    sequelize.close();
    }
}

exports.validateOrder = validateOrder;
