package coffee.gaius.timeormoney.engine;

import android.content.Context;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.android.volley.RequestQueue;

import org.json.JSONObject;

/**
 * Created by ErikGaius on 12/5/2015.
 */
public class conn {
    private static conn objConn;
    private RequestQueue queue;

    private String myTAG = "TimeOrMoney";
    private String apiUrl = "http://192.168.1.37:3000/api";

    private conn(Context context){
        // Constructor
        this.queue = Volley.newRequestQueue(context);
    }

    public void test(Response.Listener<JSONObject> response,
                     Response.ErrorListener error)
    {
        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, this.apiUrl, null,
                response, error);
        request.setTag(myTAG);
        this.queue.add(request);
    }

    public void stopAll()
    {
        this.queue.cancelAll(myTAG);
    }

    // Singleton Instance
    public static conn getInstance(Context context)
    {
        if (objConn == null)
        {
            objConn = new conn(context);
        }
        return objConn;
    }
}
