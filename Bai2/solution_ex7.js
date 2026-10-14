const subscriptions = [
    {
        subscriptionId: "SUB_001",
        customerName: "Nguyen Van An",
        planTier: "PERSONAL",
        deviceLimit: 1
    },
    {
        subscriptionId: "SUB_002",
        customerName: "Tran Thi Mai",
        planTier: "FAMILY",
        deviceLimit: 5
    },
    {
        subscriptionId: "SUB_003",
        customerName: "Le Van Nam",
        planTier: "FAMILY",
        deviceLimit: 5
    }
];

function addSubscription() {
    let subscriptionId = prompt("Nhap ma thue bao:");
    let customerName = prompt("Nhap ten khach hang:");
    let planTier = prompt("Nhap goi cuoc (PERSONAL/FAMILY):");

    let deviceLimit = 1;

    if (planTier === "FAMILY") {
        deviceLimit = 5;
    } else if (planTier !== "PERSONAL") {
        console.log("Goi cuoc khong hop le!");
        return;
    }

    const newSubscription = {
        subscriptionId: subscriptionId,
        customerName: customerName,
        planTier: planTier,
        deviceLimit: deviceLimit
    };

    subscriptions.push(newSubscription);
    console.log("Them thue bao thanh cong!");
}

function listSubscriptions() {
    console.log("========== DANH SACH THUE BAO ==========");

    for (let i = 0; i < subscriptions.length; i++) {
        console.log("Ma:", subscriptions[i].subscriptionId);
        console.log("Khach hang:", subscriptions[i].customerName);
        console.log("Goi cuoc:", subscriptions[i].planTier);
        console.log("So thiet bi:", subscriptions[i].deviceLimit);
        console.log("----------------------------------------");
    }
}

function updateSubscription() {
    let subscriptionId = prompt("Nhap ma thue bao can cap nhat:");
    let found = false;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId) {
            let planTier = prompt("Nhap goi moi (PERSONAL/FAMILY):");

            if (planTier === "PERSONAL") {
                subscriptions[i].planTier = "PERSONAL";
                subscriptions[i].deviceLimit = 1;
            } else if (planTier === "FAMILY") {
                subscriptions[i].planTier = "FAMILY";
                subscriptions[i].deviceLimit = 5;
            } else {
                console.log("Goi cuoc khong hop le!");
                return;
            }

            console.log("Cap nhat thanh cong!");
            found = true;
            break;
        }
    }

    if (found === false) {
        console.log("Khong tim thay ma thue bao!");
    }
}

// 4. Xoa thue bao
function deleteSubscription() {
    let subscriptionId = prompt("Nhap ma thue bao can xoa:");
    let found = false;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId) {
            subscriptions.splice(i, 1);
            console.log("Xoa thue bao thanh cong!");
            found = true;
            break;
        }
    }

    if (found === false) {
        console.log("Khong tim thay ma thue bao!");
    }
}

// 5. Menu chuong trinh
let choice;

do {
    console.log("\n========== RIKKEISTREAM ==========");
    console.log("1. Them thue bao moi");
    console.log("2. Xem danh sach thue bao");
    console.log("3. Cap nhat goi cuoc");
    console.log("4. Huy thue bao");
    console.log("5. Thoat chuong trinh");

    choice = prompt("Nhap lua chon (1-5):");

    switch (choice) {
        case "1":
            addSubscription();
            break;

        case "2":
            listSubscriptions();
            break;

        case "3":
            updateSubscription();
            break;

        case "4":
            deleteSubscription();
            break;

        case "5":
            console.log("Da thoat chuong trinh!");
            break;

        default:
            console.log("Lua chon khong hop le!");
    }
} while (choice !== "5");
