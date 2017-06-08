using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular2mercas.Models
{
    public class VertionDB
    {
        public static List<Vertion> vertions;

        static VertionDB()
        {
			vertions = new List<Vertion>() { };

		}
    }
}