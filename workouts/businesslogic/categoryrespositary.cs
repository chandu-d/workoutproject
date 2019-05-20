using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace businesslogic
{
    public class categoryrespositary
    {

        public List<workout_categorys> GetAll()
        {
            try
            {
                using (workouttrackerprojectsEntities objcontext = new workouttrackerprojectsEntities())
                {
                    var query = from obj in objcontext.workout_categorys
                                select obj;

                    return query.ToList();
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }


        }

        public workout_categorys GetById(int catagoryid)
        {
            try
            {
                using (workouttrackerprojectsEntities objcontext = new workouttrackerprojectsEntities())
                {
                    var query = (from obj in objcontext.workout_categorys
                                 where obj.category_id == catagoryid
                                 select obj).FirstOrDefault();

                    return query;
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void EditCatagory(int catagoryid)
        {
            try
            {

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }



        public void AddCatagory(workout_categorys obj)
        {
            try
            {
                workouttrackerprojectsEntities db = new workouttrackerprojectsEntities();
                db.workout_categorys.Add(obj);
                db.SaveChanges();


            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        public void DeleteCatagory(int catagoryid)
        {
            try
            {

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }




    }
}




