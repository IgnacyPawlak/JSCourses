using JSProject.Data;
using JSProject.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace JSProject
{
    public class InitPlatformDefaultValueSetting
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public InitPlatformDefaultValueSetting(ApplicationDbContext context,
                                               UserManager<ApplicationUser> userManager)
        {
            this._context = context;
            this._userManager = userManager;
        }

        public InitPlatformDefaultValueSetting(IServiceProvider serviceProvider)
        {
            _context = serviceProvider.GetRequiredService<ApplicationDbContext>();
            _userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
        }

        public void Init()
        {
            if (_context.ApplicationUsers.Count() == 0)
            {
                if (_userManager.CreateAsync(new ApplicationUser { UserName = "Admin" }, "Admin").Result.Succeeded)
                {
                    _context.MyRoles.AddRange(new[]
                    {
                        new MyRole
                        {
                            Name = "Admin"
                        },
                        new MyRole
                        {
                            Name = "Teacher"
                        }
                    });
                    _context.SaveChanges();

                    _context.MyRoleToUsers.Add(new MyRoleToUser
                    {
                        MyRoleId = _context.MyRoles.Where(x => x.Name == "Admin").FirstOrDefault()?.Id ?? 0,
                        UserId = _context.ApplicationUsers.Where(x => x.UserName == "Admin").FirstOrDefault()?.Id ?? ""
                    });
                    _context.SaveChanges();
                }
            }
        }
    }
}
