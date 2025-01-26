type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer1 = getCustomer(0);
// optional property access operator
console.log(customer1?.birthday?.getFullYear); // print undefined

let customer2 = getCustomer(1);
console.log(customer2?.birthday?.getFullYear());

/**
 * Other:
 *  optional element access operator
 *  optional call operator
 */
