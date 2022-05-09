using JSProject.Data;
using JSProject.DTO;
using JSProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JSProject.API
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public UserController(ApplicationDbContext context,
                              UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [Route("api/User/CurrentUser")]
        [HttpGet]
        public UserDTO CurrentUser()
        {
            var buffUser = _userManager.GetUserAsync(User).Result;

            return new UserDTO
            {
                Id = buffUser.Id,
                Name = buffUser.UserName,
                Role = _userManager.IsInRoleAsync(buffUser, "Admin").Result ? "Admin" : _userManager.IsInRoleAsync(buffUser, "Teacher").Result ? "Teacher" : "Student"
            };
        }

        [Route("api/User/CurrentUserAlt")]
        [HttpGet]
        public UserDTO CurrentUserAlt(string buff)
        {
            var buffUser = _context.ApplicationUsers.Where(x => x.UserName == buff).FirstOrDefault();

            if (buffUser == null) return null;

            return new UserDTO
            {
                Id = buffUser.Id,
                Name = buffUser.UserName,
                Role = buffUser.myRoles.FirstOrDefault() != null ? buffUser.myRoles.FirstOrDefault().MyRole.Name : "Student"
            };
        }

        [Route("api/User/GetUserList")]
        [HttpGet]
        public IEnumerable<UserDTO> GetUserList()
        {
            return _context.ApplicationUsers.Select(x => new UserDTO
            {
                Id = x.Id,
                Name = x.UserName,
                Role = x.myRoles.FirstOrDefault() != null ? x.myRoles.FirstOrDefault().MyRole.Name : "Student"
            });
        }

        [Route("api/User/GetUserById")]
        [HttpGet]
        public UserDTO GetUserById(string userId)
        {
            return _context.ApplicationUsers.Where(x => x.Id == userId).Select(x => new UserDTO
            {
                Id = x.Id,
                Name = x.UserName,
                Role = x.myRoles.FirstOrDefault() != null ? x.myRoles.FirstOrDefault().MyRole.Name : "Student"
            }).FirstOrDefault();
        }

        [Route("api/User/GetTeacherList")]
        [HttpGet]
        public IEnumerable<UserDTO> GetTeacherList()
        {
            return _context.ApplicationUsers.Where(x => x.myRoles.Any(y => y.MyRole.Name == "Teacher")).Select(x => new UserDTO
            {
                Id = x.Id,
                Name = x.UserName,
                Role = "Teacher"
            }).ToList();
        }
    }
}
