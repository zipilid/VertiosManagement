using angular2mercas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angular2mercas.Models
{
    public class Vertion
    {
        public int VertionID { get; set; }
        public string Name { get; set; }
		public DateTime CreationTime { get; set; }
		public List<Feature> FeatureList { get; set; }
		
    }
}