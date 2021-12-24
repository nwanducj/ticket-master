export const formatCurrency = price => {
    return (

        (price + "")
            .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        // .replace(".", ",")
    );
};