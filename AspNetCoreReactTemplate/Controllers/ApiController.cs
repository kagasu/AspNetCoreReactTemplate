﻿using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreReactTemplate.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private readonly ILogger<ApiController> _logger;

        public ApiController(ILogger<ApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet("helloworld")]
        public string Get()
        {
            return "Hello World!";
        }
    }
}