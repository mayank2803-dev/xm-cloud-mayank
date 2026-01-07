using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace XmCloudSXAStarter.Foundation
{
    public class GraphQLClient
    {
        private readonly HttpClient _httpClient;
        private readonly string _graphQLEndpoint;
        private readonly string _accessToken = "E3B87CE0-677C-4AF4-BEF6-C51CEAE33E5F";

        public GraphQLClient(string graphQLEndpoint)
        {
            _httpClient = new HttpClient();
            _graphQLEndpoint = graphQLEndpoint;
            _httpClient.DefaultRequestHeaders.Add("sc_apikey", _accessToken);
        }

        public string ExecuteQuery(string query)
        {
            var payload = new
            {
                query = query
            };

            var content = new StringContent(JsonConvert.SerializeObject(payload), Encoding.UTF8, "application/json");

            var response = _httpClient.PostAsync(_graphQLEndpoint, content).Result;

            if (response.IsSuccessStatusCode)
            {
                var responseString = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                return responseString;
            }
            else
            {
                // Handle error response
                throw new HttpRequestException($"GraphQL query failed with status code: {response.StatusCode}");
            }
        }
    }
}
