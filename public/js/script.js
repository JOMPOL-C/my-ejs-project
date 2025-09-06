document.addEventListener('DOMContentLoaded', () => {
    // form
    const form  = document.getElementById("myform");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            const newEntry = { name, email, date: new Date().toLocaleString() };

            const existingData = localStorage.getItem("userDataList");
            let dataList = [];
            if (existingData) {
                dataList = JSON.parse(existingData);
            }

            dataList.push(newEntry);

            localStorage.setItem("userDataList", JSON.stringify(dataList));

            alert("ข้อมูลถูกบันทึกแล้ว");
            form.reset();
        });
    }

    // data
    const  dataContainer = document.getElementById("data-container");
    if (dataContainer) {
        const storedData = localStorage.getItem("userDataList");

    if (storedData) {
        const  dataList = JSON.parse(storedData);

        if (dataList.length > 0) {
        dataContainer.innerHTML = "";

        dataList.forEach((data) => {
            const card = document.createElement("div");
            card.classList.add("data-card");
            card.innerHTML = `
                <p><strong>ชื่อ:</strong> ${data.name}</p>
                <p><strong>อีเมล:</strong> ${data.email}</p>
                <p><strong>บันทึกเมื่อ:</strong> ${data.date}</p>
            `
            dataContainer.appendChild(card);
        });
    } else {
        dataContainer.innerHTML = " <p>ไม่มีข้อมูลที่บันทึกไว้</p> ";
        
        

            }
        } else {
            dataContainer.innerHTML = " <p>ไม่มีข้อมูลที่บันทึกไว้</p> ";
        }

    }  
});
