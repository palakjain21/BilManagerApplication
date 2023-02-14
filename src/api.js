const getBills = () => {
    const bills = localStorage.getItem("bills");
    let billList = [];
    if (bills) {
        billList = JSON.parse(bills);
        }
    return billList;
}

const postBill = (bill) => {
    const bills = getBills();
    console.log(bills,bill, "checking postBill bills");
    bills.push(bill);
    localStorage.setItem("bills", JSON.stringify(bills));
    return bill;
}

const  editBill = (bill) => {
    const bills = getBills();
    const index = bills.findIndex((b) => b.id === bill.id);
    bills[index] = bill;
    localStorage.setItem("bills", JSON.stringify(bills));
    return bills;
}

const deleteBill = (id) => {
    const bills = getBills();
    const updatedBills = bills.filter((bill) => bill.id !== id);
    localStorage.setItem("bills", JSON.stringify(updatedBills));
    return updatedBills;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getBills,
    postBill,
    editBill,
    deleteBill,
}