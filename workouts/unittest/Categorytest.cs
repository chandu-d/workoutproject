using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using businesslogic;
namespace unittest
{
    [TestFixture]
  public  class Categorytest
    {
        [Test]
        public void  GetAllCategoriesTest()
        {
            categoryrespositary obj = new categoryrespositary();
            int Expected = 0;
            var Actual = obj.GetAll().Count();
            Assert.AreEqual(Expected, Actual);
        }
    }
}
