using JSProject.Data;
using JSProject.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JSProject.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CourseController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<CourseDTO> GetCourseList()
        {
            return _context.Courses.OrderBy(x => x.Date).Select(x => new CourseDTO
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Date = x.Date.ToString("f"),
                Teacher = x.Teacher,
                Materials = x.Materials != null ? x.Materials.Select(y => new CourseMaterialDTO
                {
                    Type = y.Material.Type.Name,
                    Content = y.Material.Content
                }) : null
            });
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public CourseDTO GetCourseById(int id)
        {
            return _context.Courses.Where(x => x.Id == id).Select(x => new CourseDTO
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Date = x.Date.ToString("f"),
                Teacher = x.Teacher,
                Materials = x.Materials != null ? x.Materials.Select(y => new CourseMaterialDTO
                {
                    Type = y.Material.Type.Name,
                    Content = y.Material.Content
                }) : null
            }).FirstOrDefault();
        }

        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
