"use strict";
exports.__esModule = true;
exports.articleDescriptions = void 0;
var articleDescriptions = [
    {
        Title: 'OpenVPN Networking',
        Description: "                In this article I created separate networks on a single linux\n                  for Wireshark) to capture packets on one network interface, and\n                  then use Wireshark to analyze the packets. I also use OpenVPN to\n                  create a VPN Tunnel between two machines, and then use Wireshark\n                  to capture packets on the VPN Tunnel.",
        URL: 'https://articles.compressibleflowcalculator.com/OpenVPN'
    },
    {
        Title: 'Video Transcoding With FFMEPG',
        Description: "In this article I analyze a popular steraming protocol built on HTTP called \n      MPEG-DASH (Dynamic Adaptive Streaming over HTTP). I then use FFMEPG to transcode a video \n      file to what are called mp4 fragments (.mps) and then create a manifest file (.mpd) that\n       contains meta-information of the chosen streams and encoding bit rates for streaming options\n        for each media stream (audio and video). You can then use a simple Javascript File on an HTML\n         file to serve the video to a client and see throug\n      h the Networking Console how the video matches with the contents of the manifest file.",
        URL: 'https://articles.compressibleflowcalculator.com/MPEG-DASH'
    },
    {
        Title: 'Digital Maps',
        Description: "                In this article I introduce the concept of Digital Maps, and how\n                  they compare to Image Maps and SVG Maps. Image Maps give visual\n                  information to the user and may involve pre-rendered\n                  geographical information about a variables, SVG Maps on the web\n                  allow native javascript interaction with image, but digital maps\n                  offer high degree of variant information handling and display\n                  capabilities, allowing the use of various raster data formats,\n                  vector data formats, and tiled vector and raster data formats,\n                  as well as rich display capabilities (Heat maps, contour maps,\n                  clustering, etc.), and interaction with a geoServer to render\n                  new layers on a map.",
        URL: 'https://articles.compressibleflowcalculator.com/Digital_Maps'
    },
    {
        Title: 'DNSSEC and Reverse DNS Part 1',
        Description: "                In this first part of the series, we will set up the basic tools\n                  with Docker to run a parent and child nameserver as well as a\n                  Dig DNS client. We Will also go over reading the output of the\n                  Dig Command and concepts such as DNS flags, EDNS, and TShark/\n                  Wireshark. We will then talk about inspecting the DNS packets\n                  inside of wireshark using tshark to capture the packets on the\n                  DNS client interface. We will then inspect the idea of zone\n                  files and the records contained inside of them. These articles\n                  will not teach about DNS and DNS-SEC basic conepts but Will\n                  refer to other articles on the topic, and rather lay groundwork\n                  for experimentation with DNS in a easy to use environment.We\n                  will also go over features of the dig command",
        URL: 'https://articles.compressibleflowcalculator.com/DNSSEC_PART_1'
    },
    {
        Title: 'DNSSEC and Reverse DNS Part 2',
        Description: "                 In this article, we will build off the 2nd and fix the DNS-SEC\n                  implimentation by adding the appropriate DS record to the parent\n                  server to properly authenticate the zone transfer. Here, we will\n                  be able to use tshark as well as the dig response to see the\n                  verification of the DNS in the EDNS flags as well as the DNSSEC\n                  flags in the request.",
        URL: 'https://articles.compressibleflowcalculator.com/DNSSEC_PART_2'
    },
    {
        Title: 'Introduction to Timestamps in Postgres',
        Description: "In thie article, I will discuss the basic premises of Clocks, Timers, and Time Zones and \n      Concepts such as UTC, IAT, Unix Timestamps, and Timestamp Formats. Then I will go over examples of the time \n      library in GO, and talk about the \"awareness\" time libraries have with dealing with time zones and locations when\n      making time calculations. Then I will introduce the different Time and Date types in Postgres, how they work, and examples\n      of queries to make time calculations such as Evaluating a Timestamp at a particular Time Zone (If It Has Time Zone Information), \n      Calculating the Time Between Events, and extracting second, minute, hour, day, month, year, and epoch information from a timestamp.",
        URL: 'https://articles.compressibleflowcalculator.com/Timestamp_Introduction_Postgres'
    },
];
exports.articleDescriptions = articleDescriptions;
