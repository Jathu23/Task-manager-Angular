using System.ComponentModel.DataAnnotations;

namespace TaskManagerAPI
{
    public class user
    {
        [Key]
        public int userId { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string phonenumber { get; set; }
        public ICollection<TaskItem>? TaskItem { get; set; }
        public address? Address { get; set; }

    }
}
