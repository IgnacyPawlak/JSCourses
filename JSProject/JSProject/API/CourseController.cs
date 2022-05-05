using JSProject.Data;
using JSProject.DTO;
using JSProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JSProject.API
{
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public CourseController(ApplicationDbContext context)
        {
            _context = context;
        }

        [Route("api/Course/GetCourseList")]
        [HttpGet]
        public IEnumerable<CourseDTO> GetCourseList()
        {
            return _context.Courses.OrderBy(x => x.Date).Select(x => new CourseDTO
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Date = x.Date.ToString("f"),
                Teacher = x.Teacher.UserName,
                Price = x.Price,
                LimitOpenDay = x.LimitOpenDay,
                Materials = x.Materials != null ? x.Materials.Select(y => new CourseMaterialDTO
                {
                    Type = y.Material.Type.Name,
                    Content = y.Material.Content
                }) : null
            });
        }

        [Route("api/Course/GetCourseById")]
        [HttpGet]
        public CourseDTO GetCourseById(int id)
        {
            return _context.Courses.Where(x => x.Id == id).Select(x => new CourseDTO
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Date = x.Date.ToString("f"),
                Teacher = x.Teacher.UserName,
                Price = x.Price,
                LimitOpenDay= x.LimitOpenDay,
                Materials = x.Materials != null ? x.Materials.Select(y => new CourseMaterialDTO
                {
                    Type = y.Material.Type.Name,
                    Content = y.Material.Content
                }) : null
            }).FirstOrDefault();
        }

        [Route("api/Course/GetCourseByUserId")]
        [HttpGet]
        public CourseDTO GetCourseByUserId(string userId)
        {
            return _context.ApplicationUsers.Where(x => x.Id == userId).SelectMany(x => x.Courses).Select(x => x.Course).Select(x => new CourseDTO
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Date = x.Date.ToString("f"),
                Teacher = x.Teacher.UserName,
                Price = x.Price,
                LimitOpenDay = x.LimitOpenDay,
                Materials = x.Materials != null ? x.Materials.Select(y => new CourseMaterialDTO
                {
                    Type = y.Material.Type.Name,
                    Content = y.Material.Content
                }) : null
            }).FirstOrDefault();
        }

        [Route("api/Course/GetCourseByTeacherName")]
        [HttpGet]
        public CourseDTO GetCourseByTeacherName(string name)
        {
            return _context.ApplicationUsers.Where(x => x.UserName == name).SelectMany(x => x.Courses).Select(x => x.Course).Select(x => new CourseDTO
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Date = x.Date.ToString("f"),
                Teacher = x.Teacher.UserName,
                Price = x.Price,
                LimitOpenDay = x.LimitOpenDay,
                Materials = x.Materials != null ? x.Materials.Select(y => new CourseMaterialDTO
                {
                    Type = y.Material.Type.Name,
                    Content = y.Material.Content
                }) : null
            }).FirstOrDefault();
        }

        [Route("api/Course/PostCourse")]
        [HttpPost]
        public void PostCourse(CourseDTO course)
        {
            var buffTeacher = _context.ApplicationUsers.Where(x => x.UserName == course.Teacher).Select(x => x.Id).FirstOrDefault();

            _context.Courses.Add(new Course
            { 
                Title = course.Title,
                Description = course.Description,
                Price = course.Price,
                TeacherId = buffTeacher,
                Date = Convert.ToDateTime(course.Date)
            });
            _context.SaveChanges();
        }
    }
}
