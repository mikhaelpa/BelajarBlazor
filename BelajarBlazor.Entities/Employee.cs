using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BelajarBlazor.Entities
{
    [Table("employee")]
    public partial class Employee
    {
        [Key]
        [Column("employee_id")]
        public Guid EmployeeId { get; set; }
        [Required]
        [Column("full_name")]
        public string FullName { get; set; }
    }
}
