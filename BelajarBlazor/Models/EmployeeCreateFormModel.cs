using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BelajarBlazor.Models
{
    public class EmployeeCreateFormModel
    {
        public string Name { set; get; }
    }

    public class EmployeeCreateFormModelValidator : AbstractValidator<EmployeeCreateFormModel>
    {
        public EmployeeCreateFormModelValidator()
        {
            RuleFor(Q => Q.Name).NotEmpty().MaximumLength(255);
        }
    }
}
