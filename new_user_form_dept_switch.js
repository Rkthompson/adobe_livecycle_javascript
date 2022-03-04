
/*
switch using the value of the Division field to populate the listing of selectable options in Department drop down.

Needs to clear the department list between selections to prevent reselection of division adding to an ever growing list of departments.
*/

//clear the department field
departDropDown.clearItems();

//populate Department
switch(this.rawValue){
    //edge direct
    case "1":
        departDropDown.addItem("ED - Catholic Fundraising");
        departDropDown.addItem("ED - Catholic Fundraising Fulfillment");
        departDropDown.addItem("ED - Client Services");
        departDropDown.addItem("ED - Creative Services");
        departDropDown.addItem("ED - Data Services");
        departDropDown.addItem("ED - Digital Services");
        departDropDown.addItem("ED - Prepress");
        departDropDown.addItem("ED - Sales & Marketing");
        departDropDown.addItem("ED - Strategy Services");
        break;
    //barton cotton graphics
    case "2":
        departDropDown.addItem("BCG - Ack & Fulfillment");
        departDropDown.addItem("BCG - Acquisition");
        departDropDown.addItem("BCG - Client Services");
        departDropDown.addItem("BCG - Data Processing");
        departDropDown.addItem("BCG - Finishing");
        departDropDown.addItem("BCG - Mailshop");
        departDropDown.addItem("BCG - Planning");
        departDropDown.addItem("BCG - Printing");
        departDropDown.addItem("BCG - Shipping & Receiving");
        break;
    //barton cotton holdings
    case "3":
        departDropDown.addItem("BCH - Finance / Accounting");
        departDropDown.addItem("BCH - Human Resources");
        departDropDown.addItem("BCH - Information Technology");
        break;
    //division not selected
    default:
        departDropDown.addItem("Please select a Division.");
        break;        
}