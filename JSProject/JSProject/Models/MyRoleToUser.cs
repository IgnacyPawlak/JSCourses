using Microsoft.AspNetCore.Identity;

namespace JSProject.Models
{
    public class MyRoleToUser
    {
        public int MyRoleId { get; set; }
        public string UserId { get; set; }

        // relation

        public MyRole MyRole { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
