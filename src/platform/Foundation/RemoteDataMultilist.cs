using Newtonsoft.Json.Linq;
using Sitecore.Data.Items;
using Sitecore.Shell.Applications.ContentEditor;
using Sitecore.Text;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI;

namespace XmCloudSXAStarter.Foundation
{
    public class RemoteDataMultilist : MultilistEx
    {
        protected override void DoRender(HtmlTextWriter output)
        {
            // Load the GUIDs and Names from GraphQL here
            NameValueCollection leftListBox = GetAvailableItemsFromGraphQLAsync();
            var rightListBox = new ListString(Value);
            this.ServerProperties["ID"] = this.ID;
            // Output the HTML for the two list boxes here
            output.Write("<div class='scContentControlMultilistContainer'>");
            output.Write("<input id=\"" + this.ID + "_Value\" type=\"hidden\" value=\"" + Value + "\" />");
            output.Write("<table id=\"" + this.ID + "\" class=\"scContentControlMultilist\">");
            output.Write("<tr><td class=\"scContentControlMultilistCaption\" width=\"50%\">All</td><td width=\"20\"><img src=\"/sitecore/images/blank.gif\" width=\"20\" height=\"1\" class=\"scSpacer\" alt=\"\" border=\"0\"></td><td class=\"scContentControlMultilistCaption\" width=\"50%\">Selected</td><td width=\"20\"><img src=\"/sitecore/images/blank.gif\" width=\"20\" height=\"1\" class=\"scSpacer\" alt=\"\" border=\"0\"></td></tr>");
            output.Write("<tr>");

            // Left ListBox (all available items)
            output.Write("<td>");
            output.Write("<select id=\"" + this.ID + "_unselected\" class=\"scContentControlMultilistBox\"  multiple=\"multiple\" size=\"10\" ondblclick=\"javascript:scContent.multilistMoveRight('" +
                this.ID + "')\" onchange=\"javascript:document.getElementById('" + this.ID +
                "_all_help').innerHTML=this.selectedIndex>=0?this.options[this.selectedIndex].innerHTML:''\">");
            foreach (string key in leftListBox.AllKeys)
            {
                output.Write($"<option value='{key}'>{leftListBox[key]}</option>");
            }
            output.Write("</select>");
            output.Write("</td>");
            output.Write("<td valign=\"top\"><img src=\"/-/icon/Office/16x16/navigate_right.png.aspx\" width=\"16\" height=\"16\" class=\"scNavButton\" style=\"margin:2px\" alt=\"\" border=\"0\" onclick=\"javascript:scContent.multilistMoveRight('" + this.ID
                + "')\" tabindex=\"0\" role=\"button\" aria-label=\"Move to selected items\" onkeydown=\"javascript:if (event.keyCode === 13 || event.keyCode === 32) { scContent.multilistMoveRight('" + this.ID
                + "'); scForm.browser.clearEvent(event, true, false); return false; }\"><br><img src=\"/-/icon/Office/16x16/navigate_left.png\" width=\"16\" height=\"16\" class=\"scNavButton\" style=\"margin:2px\" alt=\"\" border=\"0\" onclick=\"javascript:scContent.multilistMoveLeft('" + this.ID
                + "')\" tabindex=\"0\" role=\"button\" aria-label=\"Remove from selected items\" onkeydown=\"javascript:if (event.keyCode === 13 || event.keyCode === 32) { scContent.multilistMoveLeft('" + this.ID
                + "'); scForm.browser.clearEvent(event, true, false); return false; }\"></td>");
            output.Write("<td>");
            // Right ListBox (selected items)
            output.Write("<select id=\"" + this.ID + "_selected\" class=\"scContentControlMultilistBox\" multiple=\"multiple\" size=\"10\" ondblclick=\"javascript:scContent.multilistMoveLeft('" + this.ID + "')\" onchange=\"javascript:document.getElementById('" + this.ID +
                "_all_help').innerHTML=this.selectedIndex>=0?this.options[this.selectedIndex].innerHTML:''\">");
            foreach (var item in rightListBox)
            {
                output.Write($"<option value='{item}'>{(leftListBox[item] != null ? leftListBox[item] : item + " does not exist")}</option>");
            }
            output.Write("</select></td>");
            output.Write("<td valign=\"top\"><img src=\"/-/icon/Office/16x16/navigate_up.png\" width=\"16\" height=\"16\" class=\"scNavButton\" style=\"margin:2px\" alt=\"\" border=\"0\" onclick=\"javascript:scContent.multilistMoveUp('" + this.ID
                + "')\" tabindex=\"0\" role=\"button\" aria-label=\"Move up item\" onkeydown=\"javascript:if (event.keyCode === 13 || event.keyCode === 32) { scContent.multilistMoveUp('" + this.ID
                + "'); scForm.browser.clearEvent(event, true, false); return false; }\"><br><img src=\"/-/icon/Office/16x16/navigate_down.png\" width=\"16\" height=\"16\" class=\"scNavButton\" style=\"margin:2px\" alt=\"\" border=\"0\" onclick=\"javascript:scContent.multilistMoveDown('" + this.ID
                + "')\" tabindex=\"0\" role=\"button\" aria-label=\"Move down item\" onkeydown=\"javascript:if (event.keyCode === 13 || event.keyCode === 32) { scContent.multilistMoveDown('" + this.ID
                + "'); scForm.browser.clearEvent(event, true, false); return false; }\"></td>");
            output.Write("</tr>");
            output.Write("<tr><td colspan=4><div class=\"scContentControlMultilistHelp\" id=\"" + this.ID + "_all_help\"></div></td></tr>");
            output.Write("</table>");

        }

        private NameValueCollection GetAvailableItemsFromGraphQLAsync()
        {
            NameValueCollection items = new NameValueCollection();
            Sitecore.Data.Database db = Sitecore.Configuration.Factory.GetDatabase("master");
            Item result = db.GetItem("{B0596348-4B15-45F1-A2BB-7B49F4373A31}");

            try
            {
            
                 // Process the result
                Sitecore.Diagnostics.Log.Info("GraphQL query result: " + result, this);
            }
            catch (Exception ex)
            {
                // Handle exception
                Sitecore.Diagnostics.Log.Error("Error executing GraphQL query", ex, this);
            }
            // Pseudo-code for making a GraphQL query
            //JObject data = JObject.Parse(result);
            
            foreach (Item item in result.GetChildren())
            {
                items.Add(item.ID.ToString(), item.Name);
            }

            return items;
        }
    }
}
