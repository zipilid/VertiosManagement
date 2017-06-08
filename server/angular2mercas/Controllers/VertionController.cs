using angular2mercas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angular2mercas.Controllers
{
    [RoutePrefix("api/vertions")]
	public class VertionController : ApiController
    {

        [Route("GetVertions")]
        public List<Vertion> Get()
        {
            return VertionDB.vertions;
        }

        [Route("add")]
        public bool Add(angular2mercas.Models.Vertion vertion)
        {
			var fromDb = VertionDB.vertions.FirstOrDefault(x => x.Name == vertion.Name);
            if (fromDb == null)
            {
                VertionDB.vertions.Add(vertion);
                return true;
            }
            return false;
        }


        [Route("edit")]
        public bool Edit(angular2mercas.Models.Vertion vertion)
        {
            var fromDb = VertionDB.vertions.FirstOrDefault(x => x.VertionID == vertion.VertionID);
            if (fromDb == null)
                return false;
            fromDb.Name = vertion.Name;
            fromDb.CreationTime = vertion.CreationTime;
			return true;
        }

		[Route("remove")]
		public bool Remove(int VertionID)
		{
			var fromDb = VertionDB.vertions.FirstOrDefault(x => x.VertionID == VertionID);
			if (fromDb == null)
				return false;

			VertionDB.vertions.Remove(fromDb);
			return true;
		}
	}
}