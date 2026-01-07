using Newtonsoft.Json.Linq;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;
using Sitecore.Security.Accounts;
using System;
using System.Collections.Generic;
using System.Linq;
namespace XmCloudSXAStarter.RenderingContentsResolvers
{
    public class GetUsersListResolver : RenderingContentsResolver
    {
        public override object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            //check if the parameters are not null
            Assert.ArgumentNotNull(rendering, nameof(rendering));
            Assert.ArgumentNotNull(renderingConfig, nameof(renderingConfig));

            //get the datasource item
            Item datasourceItem = this.GetContextItem(rendering, renderingConfig);

            //return null object if the datasourceItem is null
            if (datasourceItem == null)
            {
                return null;
            }
          
            //initialize the JSON object to be returned with the datasourceItem details 
            JObject jobject = ProcessItem(datasourceItem, rendering, renderingConfig);

            //get the children of the datasourceItem
            IEnumerable<Item> items = GetItems(datasourceItem);
            List<Item> itemList = items != null ? items.ToList() : null;
            string userName = @"sitecore\Admin";
            IEnumerable<User> _roleUsers = RolesInRolesManager.GetUsersInRole(Role.FromName(userName), true);
            JArray children = (JArray)_roleUsers;


            if (children != null)
            {
                jobject["users"] = children;
            }

            return jobject;
        }
    }
}
