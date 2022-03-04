/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Field Processor Functions
//
// These functions are called by the ProcessAllFields function
// depending on the kind of field being processed.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// oField is a check box object.
function ProcessCheckBox(oField)
{
}

// oField is a radio button object (inside an exclusion (radio button) group).
function ProcessRadioButton(oField)
{
}

// oField is a list box.
function ProcessListBox(oField)
{
}

// oField is a drop down list (combo box).
function ProcessDropDownList(oField)
{
}

// oField is an image edit object.
function ProcessImageEdit(oField)
{
}

// oField is a barcode edit object.
function ProcessBarcodeEdit(oField)
{
}

// oField is a button object.
function ProcessButton(oField)
{
}

// oField is a signature object.
function ProcessSignature(oField)
{
}

// oField is a date time edit object.
function ProcessDateTime(oField)
{
}

// oField is a numeric edit object.
function ProcessNumeric(oField)
{
}

// oField is a password edit object.
function ProcessPassword(oField)
{
}

// oField is a text edit object.
function ProcessTextEdit(oField)
{
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProcessAllFields Function
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Process all fields found within the specified node (object).
// For each field that's found, the appropriate Field Processor Function
//  is called with a reference to the field itself.
function ProcessAllFields(oNode)
{
	if (oNode.className == "exclGroup" || oNode.className == "subform"  || oNode.className == "subformSet" || oNode.className == "area")
	{
		// Look for child fields.
		
		for (var i = 0; i < oNode.nodes.length; i++)
		{
			var oChildNode = oNode.nodes.item(i);
			ProcessAllFields(oChildNode);
		}
	}
	else if (oNode.className == "field")
	{
		switch (oNode.ui.oneOfChild.className)
		{
			case "button":
				ProcessButton(oNode);
				break;
				
			case "checkButton":
				if (oNode.parent.className == "exclGroup")
				{
					// checkButtons inside exclusion groups are radio buttons
					ProcessRadioButton(oNode);
				}
				else
				{
					// otherwise, they're check boxes
					ProcessCheckBox(oNode);
				}
				break;
			
			case "choiceList":
			{
				var oUITypeNode = oNode.ui.resolveNode("#choiceList");
				
				if (oUITypeNode.open == "userControl")
				{
					// drop down list / combo box
					ProcessDropDownList(oNode);
				}
				else
				{
					// otherwise, it's a list box
					ProcessListBox(oNode);
				}
				
				break;
			}
	
			case "dateTimeEdit":
				ProcessDateTime(oNode);
				break;
			
			case "imageEdit":
				ProcessImageEdit(oNode);
				break;
			
			case "numericEdit":
				ProcessNumeric(oNode);
				break;
			
			case "passwordEdit":
				ProcessPassword(oNode);
				break;
			
			case "textEdit":
				ProcessTextEdit(oNode);
				break;
			
			case "signature":
				ProcessSignature(oNode);
				break;
			
			case "barcode":
				ProcessBarcodeEdit(oNode);
				break;
			
			default:
				// unknown field type
				break;
		}
	}
}
