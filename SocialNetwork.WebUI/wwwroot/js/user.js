
function GetAllUsersLayout() {
    $.ajax({
        url: "/Home/GetAllUsersForLayout",
        method: "GET",
        success: function (data) {
            let content = "";
            for (var i = 0; i < data.length; i++) {

                let style = '';

                if (data[i].isOnline) {
                    style = 'border: 5px solid springgreen';
                }
                else {
                    style = "border: 5px solid red";

                }

                const item = `
            

    <div style="display:flex;align-items:center;padding:10px;margin:5px 0;background-color:#f4f4f4;border-radius:5px;border-left:5px solid ${data[i].online ? 'green' : 'red'};">
        <img src="/images/${data[i].image}" alt="${data[i].email}" style="width:40px;height:40px;border-radius:50%;margin-right:10px;" />
        <span style="font-size:16px;">${data[i].email}</span>
    </div>
    



                `;
                content += item;

            }
            $("#allUsers2").html(content);

        }

    })
}