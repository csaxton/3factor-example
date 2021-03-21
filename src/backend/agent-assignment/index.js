const Sequelize = require("sequelize");

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING || "postgres://postgres:password@localhost:6432/postgres";

const drivers = [95, 96, 97, 98, 99, 100];

function getRandomDriver() {
    return drivers[Math.floor(Math.random() * 5)];
}

async function assignAgent(order){
    try {
        var sequelize = new Sequelize(
            POSTGRES_CONNECTION_STRING,
            {
                operatorsAliases: false
            }
        );
        var driverId = getRandomDriver();
        var res = await sequelize.query('BEGIN;' +
                                    'INSERT INTO assignment (order_id, driver_id) values (:orderId, :driverId); ' +
                                    'UPDATE orders SET driver_assigned=true WHERE order_id = :orderId ;' +
                                    'COMMIT;',
                                    { replacements: { orderId: order.order_id, driverId: driverId } }
                                   );
        return res;
    } catch(e) {
        console.log(e);
        throw new Error(e);
    } finally {
	      sequelize.close();
    }
}

exports.assignAgent = assignAgent;

