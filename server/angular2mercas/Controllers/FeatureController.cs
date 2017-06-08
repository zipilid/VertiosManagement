using angular2mercas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angular2mercas.Controllers
{
	public class FeatureController : ApiController
	{
		[Route("GetFeatures")]
		public List<Feature> Get(int id)
		{
			return VertionDB.vertions.FirstOrDefault(x => x.VertionID == id).FeatureList;
		}

		[Route("add")]
		public bool Add(Feature feature)
		{
			var vertionFromDb = VertionDB.vertions.FirstOrDefault(x => x.VertionID == feature.VertionID);
			if (vertionFromDb != null)
			{
				var featureFromDb = vertionFromDb.FeatureList.FirstOrDefault(x => x.FeatureID == feature.FeatureID);
				if (featureFromDb == null) {
					vertionFromDb.FeatureList.Add(feature);
					return true;
				}
			}
			return false;
		}


		[Route("edit")]
		public bool Edit(Feature feature)
		{
			var vertionFromDb = VertionDB.vertions.FirstOrDefault(x => x.VertionID == feature.VertionID);
			var featureFromDb = vertionFromDb.FeatureList.FirstOrDefault(x => x.FeatureID == feature.FeatureID);
			if (featureFromDb == null)
				return false;
			featureFromDb.Description = feature.Description;
			return true;
		}

		[Route("remove")]
		public bool Remove(int id)
		{
			angular2mercas.Models.Vertion vertionFromDb = VertionDB.vertions.FirstOrDefault(x => x.VertionID == id);
			Feature featureFromDb = vertionFromDb.FeatureList.FirstOrDefault(x => x.FeatureID == id);
			if (featureFromDb == null)
				return false;

			vertionFromDb.FeatureList.Remove(featureFromDb);
			return true;
		}
	}
}