using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication24
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
		{
			var cors = new EnableCorsAttribute("*", "*", "*");
			config.EnableCors(cors);
			var jFormat = config.Formatters.JsonFormatter;
            // Web API configuration and services
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            jFormat.SerializerSettings.
                ContractResolver = new CamelCasePropertyNamesContractResolver();

            //jFormat.SerializerSettings.DateFormatHandling = DateFormatHandling.MicrosoftDateFormat;

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
