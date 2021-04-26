const annualPackage = [
  {
    "name": "Basic",
    "price": 199.99,
    "storage": "500 GB",
    "users": 2,
    "send_upto": 3
  },
  {
    "name": "Professional",
    "price": 249.99,
    "storage": "1 TB",
    "users": 5,
    "send_upto": 10
  },
  {
    "name": "Master",
    "price": 399.99,
    "storage": "2 TB",
    "users": 10,
    "send_upto": 20
  }
]
const monthlyPackage = [
  {
    "name": "Basic",
    "price": 19.99,
    "storage": "500 GB",
    "users": 2,
    "send_upto": 3
  },
  {
    "name": "Professional",
    "price": 24.99,
    "storage": "1 TB",
    "users": 5,
    "send_upto": 10
  },
  {
    "name": "Master",
    "price": 39.99,
    "storage": "2 TB",
    "users": 10,
    "send_upto": 20
  }
]
export default function getData(type) {
  if (type === "annual") {
    return annualPackage;
  }
  return monthlyPackage;
}