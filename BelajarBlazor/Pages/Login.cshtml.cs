using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BelajarBlazor.Pages
{
    public class LoginModel : PageModel
    {
        public class LoginFormModel
        {
            public string Email { set; get; }
        }

        [BindProperty]
        public LoginFormModel Form { set; get; }

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnPostAsync(string redirectTo)
        {
            var id = new ClaimsIdentity("cookie");
            id.AddClaim(new Claim(ClaimTypes.Name, Form.Email));
            var p = new ClaimsPrincipal(id);
            await HttpContext.SignInAsync(p);

            if (redirectTo != null)
            {
                // awas kena open redirection atttack, cek dulu
                return Redirect(redirectTo);
            }

            return Redirect("~/");
        }
    }
}
