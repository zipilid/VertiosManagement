using angular2mercas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angular2mercas.Controllers
{
    [RoutePrefix("api/user")]
	public class UsersController : ApiController
    {
        [Route("GetUsers")]
        public List<User> GetHeroes()
        {
            return DB.heroes;
        }

        [Route("edit")]
        public bool Edit(User hero)
        {
            var fromDb = DB.heroes.FirstOrDefault(x => x.Id == hero.Id);
            if (fromDb == null)
                return false;

            fromDb.Name = hero.Name;
            return true;
        }

        [Route("add")]
        public bool Add(User hero)
        {
            var fromDb = DB.heroes.FirstOrDefault(x => x.Id == hero.Id|| x.Name == hero.Name);
            if (fromDb == null) {
                DB.heroes.Add(hero);
                return true;
            }
            return false;
        }

        [Route("remove")]
        public bool Remove(int id)
        {
            var fromDb = DB.heroes.FirstOrDefault(x => x.Id == id);
            if (fromDb == null)
                return false;

            DB.heroes.Remove(fromDb);
            return true;
        }
    }
}