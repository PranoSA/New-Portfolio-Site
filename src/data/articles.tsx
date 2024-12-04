type ArticleDescription = {
  URL: string;
  Description: string;
  Title: string;
};

const articleDescriptions: ArticleDescription[] = [
  {
    Title: 'OpenVPN Networking',
    Description: `                In this article I created separate networks on a single linux
                  for Wireshark) to capture packets on one network interface, and
                  then use Wireshark to analyze the packets. I also use OpenVPN to
                  create a VPN Tunnel between two machines, and then use Wireshark
                  to capture packets on the VPN Tunnel.`,
    URL: 'https://articles.compressibleflowcalculator.com/OpenVPN',
  },
  {
    Title: 'Video Transcoding With FFMEPG',
    Description: `In this article I analyze a popular steraming protocol built on HTTP called 
      MPEG-DASH (Dynamic Adaptive Streaming over HTTP). I then use FFMEPG to transcode a video 
      file to what are called mp4 fragments (.mps) and then create a manifest file (.mpd) that
       contains meta-information of the chosen streams and encoding bit rates for streaming options
        for each media stream (audio and video). You can then use a simple Javascript File on an HTML
         file to serve the video to a client and see throug
      h the Networking Console how the video matches with the contents of the manifest file.`,
    URL: 'https://articles.compressibleflowcalculator.com/MPEG-DASH',
  },
  {
    Title: 'Digital Maps',
    Description: `                In this article I introduce the concept of Digital Maps, and how
                  they compare to Image Maps and SVG Maps. Image Maps give visual
                  information to the user and may involve pre-rendered
                  geographical information about a variables, SVG Maps on the web
                  allow native javascript interaction with image, but digital maps
                  offer high degree of variant information handling and display
                  capabilities, allowing the use of various raster data formats,
                  vector data formats, and tiled vector and raster data formats,
                  as well as rich display capabilities (Heat maps, contour maps,
                  clustering, etc.), and interaction with a geoServer to render
                  new layers on a map.`,
    URL: 'https://articles.compressibleflowcalculator.com/Digital_Maps',
  },
  {
    Title: 'DNSSEC and Reverse DNS Part 1',
    Description: `                In this first part of the series, we will set up the basic tools
                  with Docker to run a parent and child nameserver as well as a
                  Dig DNS client. We Will also go over reading the output of the
                  Dig Command and concepts such as DNS flags, EDNS, and TShark/
                  Wireshark. We will then talk about inspecting the DNS packets
                  inside of wireshark using tshark to capture the packets on the
                  DNS client interface. We will then inspect the idea of zone
                  files and the records contained inside of them. These articles
                  will not teach about DNS and DNS-SEC basic conepts but Will
                  refer to other articles on the topic, and rather lay groundwork
                  for experimentation with DNS in a easy to use environment.We
                  will also go over features of the dig command`,
    URL: 'https://articles.compressibleflowcalculator.com/DNSSEC_PART_1',
  },
  {
    Title: 'DNSSEC and Reverse DNS Part 2',
    Description: `                 In this article, we will build off the 2nd and fix the DNS-SEC
                  implimentation by adding the appropriate DS record to the parent
                  server to properly authenticate the zone transfer. Here, we will
                  be able to use tshark as well as the dig response to see the
                  verification of the DNS in the EDNS flags as well as the DNSSEC
                  flags in the request.`,
    URL: 'https://articles.compressibleflowcalculator.com/DNSSEC_PART_2',
  },
  {
    Title: 'Introduction to Timestamps in Postgres',
    Description: `In thie article, I will discuss the basic premises of Clocks, Timers, and Time Zones and 
      Concepts such as UTC, IAT, Unix Timestamps, and Timestamp Formats. Then I will go over examples of the time 
      library in GO, and talk about the "awareness" time libraries have with dealing with time zones and locations when
      making time calculations. Then I will introduce the different Time and Date types in Postgres, how they work, and examples
      of queries to make time calculations such as Evaluating a Timestamp at a particular Time Zone (If It Has Time Zone Information), 
      Calculating the Time Between Events, and extracting second, minute, hour, day, month, year, and epoch information from a timestamp.`,
    URL: 'https://articles.compressibleflowcalculator.com/Timestamp_Introduction_Postgres',
  },
];

export type { ArticleDescription };

export { articleDescriptions };
