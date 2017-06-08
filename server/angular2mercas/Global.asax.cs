using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Security;
using System.Web.SessionState;
using WebApplication24;

namespace angular2mercas
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

        }
		protected void Application_BeginRequest(object sender, EventArgs e)
		{
			//HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "http://localhost:4200");
			//if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
			//{
			//	HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE");

			//	HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
			//	HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
			//	HttpContext.Current.Response.End();
			//}
		}

	}
}