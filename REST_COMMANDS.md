# REST commands

commands used to advance the current workflow implementation

```bash
# replace with your order id
export order_id=246e9420-89d8-11eb-91f0-1915535bc6a8

curl http://localhost:8081/validate-order \
	-d "{\"order_id\": \"${order_id}\" }" \
	-H 'Content-Type: application/json'

curl http://localhost:8081/restaurant-approval \
	-d "{\"order_id\": \"${order_id}\" }" \
	-H 'Content-Type: application/json'


curl http://localhost:8081/agent-assignment \
	-d "{\"order_id\": \"${order_id}\" }" \
	-H 'Content-Type: application/json'
```
