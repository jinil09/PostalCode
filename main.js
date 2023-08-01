var count=1;
const ShowResult= async (form)=>{

    {
        var dataF= document.getElementById("datafetch")
        dataF.setAttribute("style","display:block")
        dataF.setAttribute("style","color:red")
        dataF.setAttribute("style","margin-left: 10px")
        setTimeout(() => {
            dataF.setAttribute("style","display:none")
        }, 1500);
    }
    var pincode=form.postalcode.value;

    let url =`https://api.postalpincode.in/pincode/${pincode}` 
    let mydata =await (await fetch(url)).json();

    
    var info=document.getElementById("info")
    info.setAttribute("style","background-color: black")

    if(mydata[0]["Status"] == "Success")
    {

        {var h4=document.createElement("h4")
        info.append(h4)
        h4.setAttribute("style","color:white")
        var h4data=document.createTextNode(count+") The No of PostOffice in this("+pincode+") Pincode : "+mydata[0]["PostOffice"].length)
        h4.append(h4data);
        count++;}
        
        
        // var table1 = document.getElementById("mytable");
        {var tabdiv = document.getElementById("tabdiv");

            var divv= document.createElement("div")
            tabdiv.append(divv)
            divv.setAttribute("class","subtebdiv")

            var table= document.createElement("table")
            divv.append(table)
            table.setAttribute("class","mytab")
            table.setAttribute("border","1px")

            var th=document.createElement("th")
            table.append(th);
            var thdata=document.createTextNode("No.")
            th.append(thdata)

            var th=document.createElement("th")
            table.append(th);
            var thdata=document.createTextNode("Post Office Name")
            th.append(thdata)

            var th=document.createElement("th")
            table.append(th);
            var thdata=document.createTextNode("Branch Type")
            th.append(thdata)

            var th=document.createElement("th")
            table.append(th);
            var thdata=document.createTextNode("State")
            th.append(thdata)

            var th=document.createElement("th")
            table.append(th);
            var thdata=document.createTextNode("District")
            th.append(thdata)
}
       
        for(i=0; i<mydata[0]["PostOffice"].length;i++)
        {
           

            var tr= document.createElement("tr");
            table.append(tr);

            var td= document.createElement("td");
            tr.append(td)
            var ctd=document.createTextNode(i+1);
            td.append(ctd)

            var td= document.createElement("td");
            tr.append(td)
            var ctd=document.createTextNode(mydata[0]["PostOffice"][i]["Name"]);
            td.append(ctd)

            var td= document.createElement("td");
            tr.append(td)
            var ctd=document.createTextNode(mydata[0]["PostOffice"][i]["BranchType"]);
            td.append(ctd)

            var td= document.createElement("td");
            tr.append(td)
            var ctd=document.createTextNode(mydata[0]["PostOffice"][i]["Circle"]);
            td.append(ctd)

            var td= document.createElement("td");
            tr.append(td)
            var ctd=document.createTextNode(mydata[0]["PostOffice"][i]["District"]);
            td.append(ctd)
            
        }
        
    }

    else{

        var h4=document.createElement("h4")
        info.append(h4)
        var h4data=document.createTextNode(count+") Please Enter Valid Postel code")
        h4.append(h4data);
        h4.setAttribute("style","color:red")
        count++;
       
    }

}