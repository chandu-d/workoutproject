using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using businesslogic;
namespace workoutwebapi.Controllers
{
    public class CategoryController : ApiController
    {

        workouttrackerprojectsEntities db = new workouttrackerprojectsEntities();
        public IHttpActionResult Get()
        {
            return Ok(db.workout_categorys.ToArray());
        }
        // public IHttpActionResult Post(workout_categorys obj)


        // db.workout_collections.Add();
        //int NoOfRowsAffected = db.Save();
        //if (NoOfRowsAffected > 0)
        //{
        //   return StatusCode(HttpStatusCode.Created);
        // }//
        //  return BadRequest("Failed to Add Category");
    }
}


    

