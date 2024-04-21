let typeOfPackage = "standard";

switch (typeOfPackage) {
    case "standard":
        console.log("Your package will be delivered within 3-5 days.");
        break;
    case "express":
        console.log("Your package will be delivered on the same day.");
        break;
    case "overnight":
        console.log("Your package will be delivered next day.");
        break;

    default:
        console.log("Order not found!");
        break;
}