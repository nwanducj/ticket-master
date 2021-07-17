export const formatCurrency = price => {
    // if (isNaN(price)) {
    //     const priceStr = price.replace(/,/g, "");
    //     price = priceStr * 1;
    // } else {
    //     return "";
    // }
    return (
        "N" +
        (price + "")
            .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
            .replace(".", ",")
    );
};