var inputs = document.querySelectorAll("input")



var CRUDOprations = {
    // Get the values to add them in the array

    clearData: function clearData() {
        inputs[0].value = "";
        inputs[1].value = "";
    },
    showData: function showData() {
        var dataForTabel = "";
        for (var i = 0; i < allItemData.length; i++) {
            dataForTabel +=
                `
            <tr>
                <td>${i + 1}</td>
                <td>${allItemData[i].Name}</td>
                <td>
                    <button onclick="validateData('Update',${i})" class="btn btn-warning" id="upDate${i}" >UpDate</button>
                </td>
                <td>
                    <button onclick="validateData('Delete',${i})" class="btn btn-danger" id="delete${i}">Delete</button>
                </td>
                <td>
                    <a href="http://${allItemData[i].URL}" class="btn btn-success">Visit</a>
                </td>
            </tr>
            `
        }
        document.getElementById("TabelContent").innerHTML = dataForTabel;
    },
    updateItem: function updateItem(index) {
        alert("---Green means Update ---Yellow mean Show the data")
        var upDateButton = document.getElementById("upDate" + index);
        if (upDateButton.classList.contains("btn-warning") == true) {
            upDateButton.classList.remove("btn-warning");
            CRUDOprations.ShowValuesOnTheForm(index);
            upDateButton.classList.add("btn-success");
        } else if (upDateButton.classList.contains("btn-success") == true) {
            upDateButton.classList.remove("btn-success");
            var UpDate = {
                Name: inputs[0].value,
                URL: inputs[1].value,
            };
            allItemData.splice(index, 1, UpDate);
            localStorage.setItem("allItemData", JSON.stringify(allItemData));
            CRUDOprations.showData();
            CRUDOprations.clearData();
            upDateButton.classList.add("btn-warning");
        }
    },
    ShowValuesOnTheForm: function ShowValuesOnTheForm(index) {
        inputs[0].value = allItemData[index].Name;
        inputs[1].value = allItemData[index].URL;
    },
    deletItem: function deletItem(index) {
        allItemData.splice(index, 1);
        localStorage.setItem("allItemData", JSON.stringify(allItemData));
        CRUDOprations.showData();
    },
    getItemData: function getItemData() {

        itemData.Name = inputs[0].value;
        itemData.URL = inputs[1].value;

        allItemData.push(itemData);

        localStorage.setItem("allItemData", JSON.stringify(allItemData));

        CRUDOprations.clearData();
        CRUDOprations.showData();
    }
}

var allItemData = [];
if (localStorage.getItem("allItemData") == null) {
    allItemData = [];
} else {
    allItemData = JSON.parse(localStorage.getItem("allItemData"));
    CRUDOprations.showData();
}

var itemData = {
    Name: "",
    URL: "",
}


document.querySelector("#Submit").addEventListener("click", function () {
    validateData('Submit');
})


function validateData(buttonID, index) {
    var Site = /^www.[a-z]+.[a-z]{3}$/i;
    if (buttonID == 'Submit') {
        if (Site.test(inputs[1].value)) {
            CRUDOprations.getItemData();
        } else {
            alert("Fill all the data in the form Please !!!");
        }
    } else if (buttonID == 'Update') {

        CRUDOprations.updateItem(index);

    } else if (buttonID == 'Delete') {

        CRUDOprations.deletItem(index);

    }

}










