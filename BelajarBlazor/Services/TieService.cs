using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BelajarBlazor.Services
{
    public class TieService
    {
        private readonly IHttpContextAccessor Accessor;

        public string EmployeeSubmitSuccessMessage { set; get; }

        public TieService(IHttpContextAccessor ihttpcontextaccessor)
        {
            this.Accessor = ihttpcontextaccessor;
        }

        private string _HeaderUsername;

        private object _HeaderUsernameLock = new object();

        public string HeaderUsername // scoped (thread safe)
        {
            get
            {
                if (_HeaderUsername == null)
                {
                    lock (_HeaderUsernameLock)
                    {
                        if (_HeaderUsername == null)
                        {
                            _HeaderUsername = GetUsernameFromHeader();
                        }
                    }
                }

                return _HeaderUsername;
            }
        }

        private string GetUsernameFromHeader()
        {
            var username = Accessor.HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var decode = username.ToString(); //kerjaan mikhael
            return decode;
        }
    }
}
