using MessagePack;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.Text.Json.Serialization;

namespace webapi.Models
{
    [Table("tblEmployee")]
    public class Employee
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int EmployeeID { get; set; }

        [Required]
        public int Document { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [RegularExpression("^[MFmf]$")]
        public string Gender { get; set; }
    }
}
