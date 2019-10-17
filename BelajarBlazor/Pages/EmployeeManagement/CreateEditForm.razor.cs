using BelajarBlazor.Models;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BelajarBlazor.Pages.EmployeeManagement
{
    public class CreateEditFormBase : ComponentBase
    {
        [Parameter]
        public EmployeeCreateFormModel Form { set; get; }

        [Parameter]
        public EventCallback<EmployeeCreateFormModel> FormChanged { set; get; }

        [Parameter]
        public bool Disabled { set; get; }

        [Parameter]
        public EventCallback<EmployeeCreateFormModel> OnSubmit { set; get; }

        protected async Task OnFormSubmit()
        {
            await FormChanged.InvokeAsync(Form);
            await OnSubmit.InvokeAsync(Form);
        }
    }
}
