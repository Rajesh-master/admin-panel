

//
//<div id="table-data">
//                    <table>
//                        <tbody>
//                            <tr class="data-row">
//                                <td class="column1">28</td>
//                                <td class="column2">Larisa</td>
//                                <td class="column3">Llaneza</td>
//                                <td class="column4">SCallison@non.org</td>
//                                <td class="column5">(763)248-9034</td>
//                            </tr> 
//
document.getElementById("search-box").onkeyup = function() {myFunction()};

function data(id,firstName,lastName,email,phone,city,streetAddress,state,zip,description){
    var wrapper =document.getElementById("table-wrapper");
    var data=document.createElement("div");
    var table=document.createElement("table");
    var tableBody= document.createElement("tbody");
    console.log(id);
    
    
    
    
    
    for(var row=0 ;row<1;row++){
        var tableRow=document.createElement("tr");
        var Name=document.getElementById("name")
        var Address= document.getElementById("address");
        var City=document.getElementById("city");
        var State=document.getElementById("state");
        var ZIP =document.getElementById("zip");
        var Textarea=document.getElementById("textarea");
    
        for( var col=0;col<32;col++){
            var tableData=document.createElement("td");
            
          if (col===0){
              tableData.className="column1"
              var text=document.createTextNode(id);
            tableData.appendChild(text);
            tableRow.appendChild(tableData);
            $(tableRow).click(function () {
                Name.innerHTML="user selected :"+firstName+lastName;
                Address.innerHTML="Address :" +streetAddress;
                City.innerHTML="City :"+city;
                State.innerHTML="State :"+state;
                ZIP.innerHTML="ZIP :"+zip;
                Textarea.innerText=description;



            });
           
          } else if (col===1){
            tableData.className="column2"
            var text=document.createTextNode(firstName);
            tableData.appendChild(text);
            tableRow.appendChild(tableData);
        }else if (col===2){
            tableData.className="column3"
            var text=document.createTextNode(lastName);
            tableData.appendChild(text);
            tableRow.appendChild(tableData);
        }else if (col===3){
              tableData.className="column4"
              var text=document.createTextNode(email);
            tableData.appendChild(text);
            tableRow.appendChild(tableData);
          }else if (col===4){
            tableData.className="column5"
            var text=document.createTextNode(phone);
            tableData.appendChild(text);
            tableRow.appendChild(tableData);
        }
       
    
        }
        tableBody.appendChild(tableRow);
    
    }
    table.appendChild(tableBody);
    data.appendChild(table);
    data.className="table-data";
    wrapper.appendChild(data);

    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("search-box");
        filter = input.value.toUpperCase();
        tr = table.getElementsByTagName("tr");
      
        for (i = 0; i < 32; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
          

    }

   

   

    
}


var http= new XMLHttpRequest();
http.open("GET","http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",true);
http.onreadystatechange=function(){
    if (this.readyState===4){
        var sources= JSON.parse( this.responseText);
        
        for( var pos=0;pos<32;pos++){
            data(sources[pos].id,sources[pos].firstName,sources[pos].lastName,sources[pos].email,sources[pos].phone,sources[pos].address.city,sources[pos].address.streetAddress,sources[pos].address.state,sources[pos].address.zip,sources[pos].description);
        }
    }
}
http.send();

