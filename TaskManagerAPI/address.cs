using System.ComponentModel.DataAnnotations;

namespace TaskManagerAPI
{
    public class address
    {
        [Key]
        public int addressId {  get; set; }
        [Required]
        public string addressLine1 { get; set; }
        [Required]
        public string addressLine2 { get; set; }    
        [Required]
        public string city { get; set; }
        public int? userId { get; set; }
        public user user { get; set; }
    }
}
